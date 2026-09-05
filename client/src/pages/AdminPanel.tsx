import { useAuth } from '@/_core/hooks/useAuth';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Trash2, Edit2, Plus } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

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

export default function AdminPanel() {
  const { user, loading } = useAuth();
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      nameEn: 'Anti-aging Facial Serum',
      namePt: 'Sérum Facial Anti-envelhecimento',
      descriptionEn: 'Facial serum with hyaluronic acid and vitamin C',
      descriptionPt: 'Sérum facial com ácido hialurônico e vitamina C',
      price: 8990,
      image: '/manus-storage/facial-serum_74ba5e0e.png',
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

  // Verificar se é admin
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-8 text-center">
            <p className="text-red-600 font-semibold mb-4">
              {language === 'pt' ? 'Acesso negado' : 'Access denied'}
            </p>
            <p className="text-gray-600 mb-6">
              {language === 'pt'
                ? 'Você precisa ser administrador para acessar este painel'
                : 'You need to be an administrator to access this panel'}
            </p>
            <Button onClick={() => setLocation('/')} className="bg-green-600 hover:bg-green-700">
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
      stock: parseInt(formData.stock),
      categoryId: parseInt(formData.categoryId),
      image: formData.image || '/manus-storage/placeholder.png',
    };

    if (editingId) {
      setProducts(products.map(p => (p.id === editingId ? newProduct : p)));
      toast.success(language === 'pt' ? 'Produto atualizado!' : 'Product updated!');
    } else {
      setProducts([...products, newProduct]);
      toast.success(language === 'pt' ? 'Produto adicionado!' : 'Product added!');
    }

    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success(language === 'pt' ? 'Produto deletado!' : 'Product deleted!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-800">
              {language === 'pt' ? 'Painel Administrativo' : 'Admin Panel'}
            </h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handleAddProduct}
                  className="bg-green-600 hover:bg-green-700 text-white flex gap-2"
                >
                  <Plus className="w-5 h-5" />
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
                      <label className="block text-sm font-medium mb-1">
                        {language === 'pt' ? 'Nome (Português)' : 'Name (Portuguese)'}
                      </label>
                      <Input
                        value={formData.namePt}
                        onChange={(e) => setFormData({ ...formData, namePt: e.target.value })}
                        placeholder="Ex: Sérum Facial"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
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
                    <label className="block text-sm font-medium mb-1">
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
                    <label className="block text-sm font-medium mb-1">
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
                      <label className="block text-sm font-medium mb-1">
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
                      <label className="block text-sm font-medium mb-1">
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
                      <label className="block text-sm font-medium mb-1">
                        {language === 'pt' ? 'Categoria' : 'Category'}
                      </label>
                      <Select value={formData.categoryId} onValueChange={(val) => setFormData({ ...formData, categoryId: val })}>
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
                    <label className="block text-sm font-medium mb-1">
                      {language === 'pt' ? 'URL da Imagem' : 'Image URL'}
                    </label>
                    <Input
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="/manus-storage/..."
                    />
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      {language === 'pt' ? 'Cancelar' : 'Cancel'}
                    </Button>
                    <Button
                      onClick={handleSaveProduct}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {language === 'pt' ? 'Salvar' : 'Save'}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Products Table */}
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-200">
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
                    <tr key={product.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-800">{language === 'pt' ? product.namePt : product.nameEn}</p>
                          <p className="text-sm text-gray-500">{language === 'pt' ? product.descriptionPt : product.descriptionEn}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-green-600 font-semibold">
                        ${(product.price / 100).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.stock > 0
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditProduct(product)}
                          className="flex gap-1"
                        >
                          <Edit2 className="w-4 h-4" />
                          {language === 'pt' ? 'Editar' : 'Edit'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-red-600 hover:text-red-700 flex gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          {language === 'pt' ? 'Deletar' : 'Delete'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {products.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-gray-600 text-lg mb-6">
                {language === 'pt' ? 'Nenhum produto cadastrado' : 'No products registered'}
              </p>
              <Button onClick={handleAddProduct} className="bg-green-600 hover:bg-green-700">
                {language === 'pt' ? 'Adicionar Primeiro Produto' : 'Add First Product'}
              </Button>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
