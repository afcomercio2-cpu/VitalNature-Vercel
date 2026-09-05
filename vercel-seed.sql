SET NAMES utf8mb4;
INSERT INTO categories (id,nameEn,namePt,descriptionEn,descriptionPt,icon) VALUES
(1,'Anti-aging','Anti-envelhecimento','Curated anti-aging and skin care products','Produtos selecionados para cuidados e aparência da pele','sparkles'),
(2,'Supplements','Suplementos','Wellness and nutrition supplements','Suplementos de bem-estar e nutrição','heart-pulse'),
(3,'Beauty','Beleza','Korean beauty and skincare essentials','Essenciais de beleza e skincare coreanos','flower-2'),
(4,'Natural Foods','Alimentos Naturais','Natural foods and wellness drinks','Alimentos naturais e bebidas de bem-estar','leaf')
ON DUPLICATE KEY UPDATE nameEn=VALUES(nameEn), namePt=VALUES(namePt);

INSERT INTO products (id,categoryId,nameEn,namePt,descriptionEn,descriptionPt,price,image,rating,reviewCount,stock,affiliateUrl,affiliatePartner) VALUES
(1,1,'Korean Collagen Serum','Sérum Colágeno Coreano','Premium serum with hydrolyzed collagen for skin rejuvenation','Sérum premium com colágeno hidrolisado para rejuvenescimento da pele',1800,'collagen-serum.jpg',480,0,999,NULL,NULL),
(2,1,'Retinol Night Cream','Creme Noturno com Retinol','Night cream with retinol to reduce wrinkles and expression lines','Creme noturno com retinol para reduzir rugas e linhas de expressão',1400,'retinol-cream.jpg',470,0,999,NULL,NULL),
(3,1,'Hyaluronic Acid Toner','Tônico com Ácido Hialurônico','Hydrating toner with hyaluronic acid for firm skin','Tônico hidratante com ácido hialurônico para pele firme',1200,'hyaluronic-toner.jpg',460,0,999,NULL,NULL),
(4,1,'Eye Cream Anti-Wrinkle','Creme Contorno de Olhos','Specific cream to reduce wrinkles around the eyes','Creme específico para reduzir rugas ao redor dos olhos',1600,'eye-cream.jpg',450,0,999,NULL,NULL),
(5,2,'Korean Collagen Powder','Pó de Colágeno Coreano','Collagen powder supplement for skin, hair and nails','Suplemento de colágeno em pó para pele, cabelo e unhas',2200,'collagen-powder.jpg',490,0,999,NULL,NULL),
(6,2,'Ginseng Vitamin Complex','Complexo de Vitaminas com Ginseng','Vitamin complex with Korean ginseng for energy and vitality','Complexo vitamínico com ginseng coreano para energia e vitalidade',1800,'ginseng-vitamins.jpg',470,0,999,NULL,NULL),
(7,2,'Probiotics Supplement','Suplemento Probiótico','Probiotics for digestive health and immunity','Probióticos para saúde digestiva e imunidade',1500,'probiotics.jpg',460,0,999,NULL,NULL),
(8,2,'Vitamin C Brightening Serum','Sérum de Vitamina C','Serum with vitamin C to brighten and even out skin','Sérum com vitamina C para iluminar e uniformizar a pele',1300,'vitamin-c-serum.jpg',480,0,999,NULL,NULL),
(9,3,'Sheet Mask Pack (10)','Pack de Máscaras Faciais (10 unidades)','Pack with 10 high-quality Korean facial masks','Pack com 10 máscaras faciais coreanas de alta qualidade',800,'sheet-masks.jpg',470,0,999,NULL,NULL),
(10,3,'BB Cream Korean','BB Cream Coreana','BB Cream with medium coverage and sun protection','BB Cream com cobertura média e proteção solar',1400,'bb-cream.jpg',460,0,999,NULL,NULL),
(11,3,'Essence Toner','Essência Tônica','Essence toner to prepare skin for other products','Essência tônica para preparar a pele para outros produtos',1100,'essence-toner.jpg',450,0,999,NULL,NULL),
(12,3,'Charcoal Face Mask','Máscara Facial com Carvão','Charcoal mask for deep pore cleansing','Máscara com carvão para limpeza profunda dos poros',1000,'charcoal-mask.jpg',440,0,999,NULL,NULL),
(13,3,'Snail Mucin Essence','Essência de Baba de Caracol','Essence with snail mucin for intense hydration','Essência com baba de caracol para hidratação intensa',1100,'snail-essence.jpg',480,0,999,NULL,NULL),
(14,3,'Peptide Firming Cream','Creme Firmador com Peptídeos','Cream with peptides for skin firmness and elasticity','Creme com peptídeos para firmeza e elasticidade da pele',2000,'peptide-cream.jpg',470,0,999,NULL,NULL),
(15,3,'Niacinamide Pore Minimizer','Minimizador de Poros com Niacinamida','Serum with niacinamide to minimize pores','Sérum com niacinamida para minimizar poros',1300,'niacinamide-serum.jpg',460,0,999,NULL,NULL),
(16,3,'Aloe Vera Gel','Gel de Aloe Vera','Pure aloe vera gel for hydration and soothing','Gel de aloe vera puro para hidratação e acalmante',800,'aloe-gel.jpg',450,0,999,NULL,NULL),
(17,3,'Turmeric Brightening Mask','Máscara Iluminadora com Açafrão','Mask with turmeric to brighten and even skin tone','Máscara com açafrão para iluminar e uniformizar tom de pele',1000,'turmeric-mask.jpg',460,0,999,NULL,NULL),
(18,4,'Korean Red Ginseng Tea','Chá de Ginseng Vermelho Coreano','Premium tea with red ginseng for energy and wellness','Chá premium com ginseng vermelho para energia e bem-estar',1000,'ginseng-tea.jpg',480,0,999,NULL,NULL),
(19,4,'Honey Jujube Tea','Chá de Mel e Jujuba','Traditional Korean tea with honey and jujube','Chá tradicional coreano com mel e jujuba',800,'honey-jujube-tea.jpg',470,0,999,NULL,NULL),
(20,4,'Goji Berry Mix','Mix de Goji Berry','Mix of dried fruits with goji berry for antioxidants','Mix de frutas secas com goji berry para antioxidantes',1400,'goji-mix.jpg',460,0,999,NULL,NULL)
ON DUPLICATE KEY UPDATE categoryId=VALUES(categoryId), nameEn=VALUES(nameEn), namePt=VALUES(namePt), descriptionEn=VALUES(descriptionEn), descriptionPt=VALUES(descriptionPt), price=VALUES(price), image=VALUES(image), rating=VALUES(rating), stock=VALUES(stock), affiliateUrl=VALUES(affiliateUrl), affiliatePartner=VALUES(affiliatePartner);