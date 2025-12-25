# TODO List API with NestJS and Prisma

A RESTful API for managing TODO items built with NestJS and Prisma.

## 機能 (Features)

- ✅ TODO項目の作成 (Create TODO)
- ✅ TODO項目の一覧取得 (Get all TODOs)
- ✅ TODO項目の詳細取得 (Get TODO by ID)
- ✅ TODO項目の更新 (Update TODO)
- ✅ TODO項目の削除 (Delete TODO)

## 技術スタック (Tech Stack)

- NestJS - Node.jsフレームワーク
- Prisma - ORMツール
- PostgreSQL / SQLite - データベース（本番環境ではPostgreSQL推奨）
- TypeScript - プログラミング言語
- class-validator - バリデーション

## セットアップ (Setup)

### 前提条件 (Prerequisites)

- Node.js (v18以上)
- PostgreSQL (v12以上) - 本番環境の場合
- npm または yarn

**注意**: デフォルトではSQLiteを使用して開発しています。本番環境ではPostgreSQLを推奨します。

### インストール (Installation)

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd vercel-todo-serverend
```

2. 依存関係をインストール:
```bash
npm install
```

3. 環境変数を設定:
```bash
cp .env.example .env
# デフォルトではSQLiteを使用 (file:./dev.db)
# PostgreSQLを使用する場合は、DATABASE_URLを変更してください
# 例: DATABASE_URL="postgresql://user:password@localhost:5432/todoapp?schema=public"
```

4. Prismaマイグレーションを実行:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5. アプリケーションを起動:
```bash
npm run start:dev
```

アプリケーションは http://localhost:3000 で起動します。

## API エンドポイント (API Endpoints)

### TODO項目を作成
```
POST /todos
Content-Type: application/json

{
  "title": "買い物に行く",
  "description": "牛乳とパンを買う",
  "completed": false
}
```

### 全てのTODO項目を取得
```
GET /todos
```

### 特定のTODO項目を取得
```
GET /todos/:id
```

### TODO項目を更新
```
PATCH /todos/:id
Content-Type: application/json

{
  "title": "更新されたタイトル",
  "completed": true
}
```

### TODO項目を削除
```
DELETE /todos/:id
```

## スクリプト (Scripts)

- `npm run start` - アプリケーションを起動
- `npm run start:dev` - 開発モードで起動（ホットリロード）
- `npm run build` - プロダクション用にビルド
- `npm run start:prod` - プロダクションモードで起動
- `npm run lint` - コードをリント
- `npm run format` - コードをフォーマット
- `npm test` - テストを実行

## データベーススキーマ (Database Schema)

```prisma
model Todo {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## ライセンス (License)

MIT