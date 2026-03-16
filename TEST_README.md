# Testing Guide for vuetify-swatches

## テスト環境のセットアップ

このプロジェクトでは以下のテストツールを使用しています：

- **Vitest**: 高速なViteベースのテストランナー
- **Vue Test Utils**: Vueコンポーネントのテスト用ユーティリティ
- **jsdom**: ブラウザ環境のシミュレーション

## テストの実行

### 基本的なテスト実行

```bash
# テストを一度実行
pnpm test:run

# ウォッチモードでテスト実行
pnpm test

# カバレッジレポート付きでテスト実行
pnpm test:coverage

# UIモードでテスト実行
pnpm test:ui
```

### 特定のテストファイルのみ実行

```bash
# 基本機能テストのみ実行
pnpm vitest run test/VSwatches.basic.test.ts

# 特定のテストケースのみ実行
pnpm vitest run -t "基本的なレンダリング"
```

## テストファイル構成

```
test/
├── setup.ts                    # テスト環境のセットアップ
├── VSwatches.basic.test.ts    # 基本機能テスト
└── VSwatches.test.ts          # 完全なVuetifyテスト（現在未使用）
```

## テスト内容

### VSwatches.basic.test.ts

このファイルには以下のテストカテゴリが含まれています：

#### 基本的なレンダリング

- コンポーネントのマウント
- デフォルトスウォッチの表示
- スタイルの適用

#### プロパティのテスト

- `modelValue`: 選択されたカラー値
- `swatches`: カスタムカラーパレット
- `size`: スウォッチのサイズ
- `disabled`: 無効化状態

#### イベントのテスト

- `update:modelValue`: カラー選択時のイベント
- クリックイベントの処理
- 無効化状態での動作

#### 特殊ケース

- 透明カラーの処理
- 空の配列の処理
- 不正な値の処理
- オブジェクト形式のスウォッチ

#### リアクティブ性

- プロパティの変更に対するUI更新
- modelValueの双方向バインディング

#### アクセシビリティ

- 適切な属性の設定
- キーボードナビゲーション対応

## テストの追加

新しいテストケースを追加する場合：

1. 適切なdescribeブロック内にテストケースを追加
2. `mount()`を使用してコンポーネントをマウント
3. `wrapper.find()`や`wrapper.findAll()`でDOM要素を選択
4. `expect()`を使用してアサーション
5. 非同期処理の場合は`await`を使用

### 例：新しいテストケース

```typescript
it('新しい機能のテスト', async () => {
  const wrapper = mount(VSwatchesTest, {
    props: {
      // テスト用プロパティ
    },
  });

  // DOM操作
  const element = wrapper.find('.selector');

  // イベントトリガー
  await element.trigger('click');

  // アサーション
  expect(wrapper.emitted('update:modelValue')).toBeDefined();
});
```

## トラブルシューティング

### Vuetify依存関係のエラー

現在の設定では、Vuetifyの依存関係によるCSSインポートエラーを回避するため、Vuetifyコンポーネントをスタブとしてモックしています。

### テスト実行時のタイムアウト

長時間実行されるテストがある場合は、`vitest.config.ts`の`testTimeout`設定を調整してください。

### カバレッジレポート

現在、基本テストは実際のVSwatchesコンポーネントではなく、テスト用のシンプルバージョンを使用しているため、カバレッジレポートには反映されません。実際のコンポーネントのカバレッジを測定するには、Vuetify依存関係の問題を解決する必要があります。

## CI/CDでのテスト実行

GitHub Actionsやその他のCI環境でテストを実行する場合は、以下のコマンドを使用してください：

```bash
pnpm test:run
```

このコマンドは一度だけテストを実行し、結果を出力して終了します。
