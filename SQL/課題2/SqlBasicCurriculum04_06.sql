-- ==================================================================================================================================
-- ==================================================================================================================================
-- ==================================================================================================================================
-- 問4)
-- ==================================================================================================================================
-- ①店舗コードが「ST028」の削除フラグを「1」にして下さい。
-- 実行前確認
SELECT * FROM store WHERE store_code = 'ST028';
-- 実行
UPDATE store
SET delete_flag = 1,
	update_at = now()
WHERE store_code = 'ST028';
-- 実行後確認
SELECT * FROM store WHERE store_code = 'ST028';
-- ==================================================================================================================================
-- ②商品名が「新鮮野菜セット」の商品価格を「1,500円」に変更してください。
-- 実行前確認
SELECT * FROM product WHERE product_name = '新鮮野菜セット';
-- 実行
UPDATE product
SET product_price = 1500,
	update_at = now()
WHERE product_name = '新鮮野菜セット';
-- 実行後確認
SELECT * FROM product WHERE product_name = '新鮮野菜セット';
-- ==================================================================================================================================
-- ③商品名が「オーガニックジュースセット」かつ店舗コードが「ST013」の在庫数を「50」に変更してください。
-- 実行前確認
SELECT * FROM product WHERE category_id = 25 AND store_code = 'ST013';
-- 実行
UPDATE product
SET stock_quantity = 50,
	update_at = now()
WHERE category_id = 25 AND store_code = 'ST013';
-- 実行後確認
SELECT * FROM product WHERE category_id = 25 AND store_code = 'ST013';
-- ==================================================================================================================================
-- ④商品単価と商品価格を比較して「10,000円以上」利益が出ている全ての商品の商品価格を「3,000円値引き」してください。
-- 実行前確認
SELECT * FROM product WHERE (product_price - unit_price) >= 100000;
-- 実行
UPDATE product
SET product_price = (product_price - 3000),
	update_at = now()
WHERE (product_price - unit_price) >= 100000;
-- 実行後確認
SELECT * FROM product WHERE (product_price - unit_price) >= 100000;
-- ==================================================================================================================================
-- ⑤メイン商品カテゴリーIDが「5」の全ての商品のブランド名を「NewTech」に変更してください。
-- 実行前確認
SELECT
	p.store_code,
	s.store_category_id,
	pc.category_id,
	pc.explanation,
	p.brand_name
FROM product p
INNER JOIN store s on p.store_code = s.store_code
INNER JOIN product_category pc on s.store_category_id = pc.category_id
ORDER BY pc.category_id DESC;

-- 実行
UPDATE product p
SET brand_name = 'NewTech',
	update_at = now()
FROM (
		SELECT * FROM product_category pc 
		INNER JOIN store s ON pc.category_id = s.store_category_id
	) AS pcs
WHERE
	pcs.store_code = p.store_code
	AND pcs.category_id = 14;

-- 実行後確認
SELECT
	p.store_code,
	s.store_category_id,
	pc.category_id,
	pc.explanation,
	p.brand_name
FROM product p
INNER JOIN store s on p.store_code = s.store_code
INNER JOIN product_category pc on s.store_category_id = pc.category_id
ORDER BY pc.category_id DESC;


-- ==================================================================================================================================
-- ==================================================================================================================================
-- ==================================================================================================================================
-- 問5)
-- ==================================================================================================================================
-- ①削除フラグが「1」のものを削除して下さい。
-- 実行前確認
SELECT * FROM store WHERE delete_flag = 1;
-- 実行
DELETE FROM store WHERE delete_flag = 1;
-- 実行後確認
SELECT * FROM store WHERE delete_flag = 1;
-- ==================================================================================================================================
-- ②商品単価と商品価格を比較して「100円以下」の利益の商品を全て削除してください。
-- 実行前確認
SELECT * FROM product WHERE (product_price - unit_price) <= 100;
-- 実行
DELETE FROM product WHERE (product_price - unit_price) <= 100;
-- 実行後確認
SELECT * FROM product WHERE (product_price - unit_price) <= 100;
-- ==================================================================================================================================
-- ③メイン商品カテゴリーが「小説」かつ店舗コードが「ST008」の商品を全て削除してください。
-- 実行前確認
SELECT * FROM product WHERE category_id = 21 AND store_code = 'ST008';
-- 実行
DELETE FROM product WHERE category_id = 21 AND store_code = 'ST008';
-- 実行後確認
SELECT * FROM product WHERE category_id = 21 AND store_code = 'ST008';
-- ==================================================================================================================================
-- ④店舗商品カテゴリーが「食品」に該当し、店舗コードが「ST004」の商品を全て削除してください。
-- 実行前確認
SELECT
	p.*, pc.category_id
FROM product p
INNER JOIN store s on p.store_code = s.store_code
INNER JOIN product_category pc on s.store_category_id = pc.category_id
WHERE pc.category_id = 1 AND p.store_code = 'ST004';
-- 実行
DELETE FROM product p
USING store s, product_category pc
WHERE
	p.store_code = s.store_code
	AND s.store_category_id = pc.category_id
	AND pc.category_id = 1
	AND p.store_code = 'ST004';
-- 実行後確認
SELECT
	p.*
FROM product p
INNER JOIN store s on p.store_code = s.store_code
INNER JOIN product_category pc on s.store_category_id = pc.category_id
WHERE pc.category_id = 1 AND p.store_code = 'ST004';


-- ==================================================================================================================================
-- ==================================================================================================================================
-- ==================================================================================================================================
-- 問6)
-- ==================================================================================================================================
-- ①
-- 実行前確認
SELECT * FROM store WHERE store_name = 'フルーツフュージョンエンポリアム' OR store_name = 'every dayフルーツエンポリアム';
-- 実行
UPDATE store
SET store_name = 'every dayフルーツエンポリアム',
	update_at = now()
WHERE store_name = 'フルーツフュージョンエンポリアム';
-- 実行後確認
SELECT * FROM store WHERE store_name = 'フルーツフュージョンエンポリアム' OR store_name = 'every dayフルーツエンポリアム';
-- ==================================================================================================================================
-- ②百貨店から「ペット関係」の店舗が撤退することが決まったので、店舗商品カテゴリーが「ペット用品」の店舗を削除してください。
-- 　また、該当するフロアの空きスペースを削除した店舗の数増やしてください。
-- 実行前確認
SELECT * FROM store WHERE store_category_id = 12;
SELECT * FROM floor WHERE floor_id = 'FLOOR002';
-- 実行
DELETE FROM store WHERE store_category_id = 12;
UPDATE floor
SET open_space = (open_space + 2),
	update_at = now()
WHERE floor_id = 'FLOOR002';
-- 実行後確認
SELECT * FROM store WHERE store_category_id = 12;
SELECT * FROM floor WHERE floor_id = 'FLOOR002';
-- ==================================================================================================================================
-- ③百貨店に楽器店の導入が決まったので店舗商品カテゴリーに「楽器・楽譜」、メイン商品カテゴリーに「トロンボーン」「ギター」の2つ、合計3つのデータを追加してください。
-- 実行前確認
SELECT * FROM product_category;
-- 実行
INSERT INTO product_category
	(category_name, explanation)
VALUES
	('楽器・楽譜', '店舗商品カテゴリー'),
	('トロンボーン', 'メイン商品カテゴリー'),
	('ギター', 'メイン商品カテゴリー');
-- 実行後確認
SELECT * FROM product_category;
-- ==================================================================================================================================
-- ④楽器店の導入が開始されたので、店舗情報として下記を追加してください。

-- 実行前確認
SELECT s.*, p.product_id, product_name FROM store s
JOIN product p ON s.store_code = p.store_code
ORDER BY s.store_code DESC;
-- 実行
-- (商品情報追加)
INSERT INTO product
	(product_name, category_id, store_code, brand_name, unit_price, product_price, stock_quantity) 
VALUES
	('トロンボーン', 47, 'ST031', 'MIKI', 500000, 360000, 10),
	('ギター', 48, 'ST032', ' FenderJapone', 400000, 300000, 20);
-- (店舗情報追加)
INSERT INTO store
	(store_code, store_name, floor_id, store_category_id)
VALUES
	 ('ST031', 'SoundPippi楽器店', 'FLOOR002', 46),
	 ('ST032', 'PonSound楽器店', 'FLOOR002', 46);
-- 実行後確認
SELECT s.*, p.* FROM store s
JOIN product p ON s.store_code = p.store_code
ORDER BY s.store_code DESC;