import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, Edit2, Plus, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

interface Product {
  id: number;
  nameEn: string;
  namePt: string;
  descriptionEn: string;
  descriptionPt: string;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
}

/**
 * Admin panel — staff access is validated ONLY on the server.
 * The team password never appears in client code or VITE_ variables.
 * Login calls trpc.staff.login → server checks STAFF_PASSWORD → sets httpOnly cookie.
 */
export default function AdminPanel() {
  const { language } = useLanguage();
  const [, setLocation] = useLocation();
  const [staffPassword, setStaffPassword] = useState('');
  const [staffError, setStaffError] = useState('');

  const staffMeQuery = trpc.staff.me.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: true,
  });

  const loginMutation = trpc.staff.login.useMutation({
    onSuccess: async () => {
      setStaffError('');
      setStaffPassword('');
      toast.success(language === 'pt' ? 'Acesso liberado' : 'Access granted');
      await staffMeQuery.refetch();
    },
    onError: (err) => {
      setStaffError(
        language === 'pt'
          ? 'Senha incorreta ou servidor sem STAFF_PASSWORD configurada.'
          : 'Invalid password or STAFF_PASSWORD not configured on the server.',
      );
      console.error('[staff.login]', err.message);
    },
  });

  const logoutMutation = trpc.staff.logout.useMutation({
    onSuccess: async () => {
      toast.success(language === 'pt' ? 'Sessão encerrada' : 'Logged out');
      await staffMeQuery.refetch();
    },
  });

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      nameEn: 'Anti-aging Facial Serum',
      namePt: 'Sérum Facial Anti-envelhecimento',
      descriptionEn: 'Facial serum with hyaluronic acid and vitamin C',
      descriptionPt: 'Sérum facial com ácido hialurônico e vitamina C',
      price: 8990,
      image: '/images/product-placeholder.svg',
      stock: 50,
      categoryId: 1,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nameEn: '',
    namePt: '',
    descriptionEn: '',
    descriptionPt: '',
    price: '',
    stock: '',
    categoryId: '1',
    image: '',
  });

  const isStaff = Boolean(staffMeQuery.data?.isStaff);
  const checkingSession = staffMeQuery.isLoading;

  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStaffError('');
    if (!staffPassword.trim()) {
      setStaffError(language === 'pt' ? 'Digite a senha' : 'Enter the password');
      return;
    }
    loginMutation.mutate({ password: staffPassword });
  };

  const handleStaffLogout = () => {
    logoutMutation.mutate();
  };

  if (checkingSession) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-600">
        {language === 'pt' ? 'Verificando sessão...' : 'Checking session...'}
      </div>
    );
  }

  if (!isStaff) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center px-4">
          <Card className="w-full max-w-md p-8">
            <h1 className="mb-2 text-2xl font-bold text-green-950">
              {language === 'pt' ? 'Painel da Equipe' : 'Staff Panel'}
            </h1>
            <p className="mb-6 text-sm leading-6 text-slate-600">
              {language === 'pt'
                ? 'Acesso restrito a colaboradores da VitalNature. A senha é validada no servidor e nunca fica no código do site.'
                : 'Restricted to VitalNature staff. The password is validated on the server and never shipped in the website code.'}
            </p>
            <form onSubmit={handleStaffLogin} className="space-y-4">
              <Input
                type="password"
                autoComplete="current-password"
                placeholder={language === 'pt' ? 'Senha da equipe' : 'Staff password'}
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
                disabled={loginMutation.isPending}
                autoFocus
              />
              {staffError && <p className="text-sm text-red-600">{staffError}</p>}
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending
                  ? language === 'pt'
                    ? 'Entrando...'
                    : 'Signing in...'
                  : language === 'pt'
                    ? 'Entrar'
                    : 'Sign in'}
              </Button>
            </form>
            <Button variant="ghost" onClick={() => setLocation('/')} className="mt-4 w-full">
              {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
            </Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddProduct = () => {
    setEditingId(null);
    setFormData({
      nameEn: '',
      namePt: '',
      descriptionEn: '',
      descriptionPt: '',
      price: '',
      stock: '',
      categoryId: '1',
      image: '',
    });
    setIsDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      nameEn: product.nameEn,
      namePt: product.namePt,
      descriptionEn: product.descriptionEn,
      descriptionPt: product.descriptionPt,
      price: (product.price / 100).toString(),
      stock: product.stock.toString(),
      categoryId: product.categoryId.toString(),
      image: product.image,
    });
    setIsDialogOpen(true);
  };

  const handleSaveProduct = () => {
    if (!formData.nameEn || !formData.namePt || !formData.price || !formData.stock) {
      toast.error(language === 'pt' ? 'Preencha todos os campos' : 'Fill all fields');
      return;
    }

    const newProduct: Product = {
      id: editingId || Date.now(),
      nameEn: formData.nameEn,
      namePt: formData.namePt,
      descriptionEn: formData.descriptionEn,
      descriptionPt: formData.descriptionPt,
      price: Math.round(parseFloat(formData.price) * 100),
      stock: parseInt(formData.stock, 10),
      categoryId: parseInt(formData.categoryId, 10),
      image: formData.image || '/images/product-placeholder.svg',
    };

    if (editingId) {
      setProducts(products.map((p) => (p.id === editingId ? newProduct : p)));
      toast.success(language === 'pt' ? 'Produto atualizado!' : 'Product updated!');
    } else {
      setProducts([...products, newProduct]);
      toast.success(language === 'pt' ? 'Produto adicionado!' : 'Product added!');
    }

    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
    toast.success(language === 'pt' ? 'Produto deletado!' : 'Product deleted!');
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />

      <section className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-4xl font-bold text-gray-800">
              {language === 'pt' ? 'Painel Administrativo' : 'Admin Panel'}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={handleStaffLogout}
                disabled={logoutMutation.isPending}
                className="flex gap-2"
              >
                <LogOut className="h-4 w-4" />
                {language === 'pt' ? 'Sair' : 'Log out'}
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={handleAddProduct}
                    className="flex gap-2 bg-green-600 text-white hover:bg-green-700"
                  >
                    <Plus className="h-5 w-5" />
                    {language === 'pt' ? 'Novo Produto' : 'New Product'}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingId
                        ? language === 'pt'
                          ? 'Editar Produto'
                          : 'Edit Product'
                        : language === 'pt'
                          ? 'Novo Produto'
                          : 'New Product'}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          {language === 'pt' ? 'Nome (Português)' : 'Name (Portuguese)'}
                        </label>
                        <Input
                          value={formData.namePt}
                          onChange={(e) => setFormData({ ...formData, namePt: e.target.value })}
                          placeholder="Ex: Sérum Facial"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          {language === 'pt' ? 'Nome (Inglês)' : 'Name (English)'}
                        </label>
                        <Input
                          value={formData.nameEn}
                          onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                          placeholder="Ex: Facial Serum"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        {language === 'pt' ? 'Descrição (Português)' : 'Description (Portuguese)'}
                      </label>
                      <Textarea
                        value={formData.descriptionPt}
                        onChange={(e) => setFormData({ ...formData, descriptionPt: e.target.value })}
                        placeholder="Descreva o produto..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        {language === 'pt' ? 'Descrição (Inglês)' : 'Description (English)'}
                      </label>
                      <Textarea
                        value={formData.descriptionEn}
                        onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                        placeholder="Describe the product..."
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          {language === 'pt' ? 'Preço ($)' : 'Price ($)'}
                        </label>
                        <Input
                          type="number"
                          step="0.01"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          {language === 'pt' ? 'Estoque' : 'Stock'}
                        </label>
                        <Input
                          type="number"
                          value={formData.stock}
                          onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-sm font-medium">
                          {language === 'pt' ? 'Categoria' : 'Category'}
                        </label>
                        <Select
                          value={formData.categoryId}
                          onValueChange={(val) => setFormData({ ...formData, categoryId: val })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Anti-aging</SelectItem>
                            <SelectItem value="2">Suplementos</SelectItem>
                            <SelectItem value="3">Beleza</SelectItem>
                            <SelectItem value="4">Alimentos Naturais</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        {language === 'pt' ? 'URL da Imagem' : 'Image URL'}
                      </label>
                      <Input
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://... or /images/product.jpg"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        {language === 'pt' ? 'Cancelar' : 'Cancel'}
                      </Button>
                      <Button onClick={handleSaveProduct} className="bg-green-600 hover:bg-green-700">
                        {language === 'pt' ? 'Salvar' : 'Save'}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {language === 'pt' ? 'Produto' : 'Product'}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {language === 'pt' ? 'Preço' : 'Price'}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {language === 'pt' ? 'Estoque' : 'Stock'}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {language === 'pt' ? 'Ações' : 'Actions'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="transition hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-800">
                            {language === 'pt' ? product.namePt : product.nameEn}
                          </p>
                          <p className="text-sm text-gray-500">
                            {language === 'pt' ? product.descriptionPt : product.descriptionEn}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-green-600">
                        ${(product.price / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            product.stock > 0
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {product.stock}
                        </span>
                      </td>
                      <td className="flex gap-2 px-6 py-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditProduct(product)}
                          className="flex gap-1"
                        >
                          <Edit2 className="h-4 w-4" />
                          {language === 'pt' ? 'Editar' : 'Edit'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="flex gap-1 text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          {language === 'pt' ? 'Excluir' : 'Delete'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
