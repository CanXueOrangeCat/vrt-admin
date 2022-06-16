## vrt-admin

基于vite-react-ts搭建中后台项目


#### 下载包

```yarn
 yarn install
```

#### 运行

```yarn
 yarn dev
```

#### 打包

```yarn
 yarn build
```
***
前端工程接入
模版使用的是 vite-react-ts
```
yarn create vrt-admin --template react-ts
```
#### 配置vite.config.ts
* 将svg转成react组件导入
```
  yarn add -D vite-plugin-svgr
```
* 设置@别名路径
```
yarn add -D vite-plugin-ts-alias
```
#### Eslint代码规范 + Prettier

#### 新版husky + lint-staged
##### husky & lint-staged 安装
```
yarn add -D husky
yarn add -D lint-staged
```
##### 在package.json中添加 prepare 脚本 并执行
```
npm set-script prepare "husky install"
npm run prepare
```
##### 命令添加 git hooks
```
npx husky add .husky/pre-commit "npm run lint"
```
##### 在package.json中添加 lint 命令
```
{
  "scripts": {
    "lint": "lint-staged",
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  },
}
```

##### 制定提交规范
* 安装
```
yarn add -D @commitlint/config-conventional @commitlint/cli

```
* 生成commit配置文件
 *可以是 commitlint.config.js，当然也可以是 .commitlintrc.js*
 ```
 echo "module.exports = {extends: ['@commitlint/config-conventional']};" > .commitlint.js
 ```

* 新增一个 commit-msg 钩子
```
npx husky add .husky/commit-msg "npx commitlint --edit $1"
```

* commit type
> git commit -m 'feat: 增加 xxx 功能'

type | subject
 :-: | :-:
update | 更新某功能（不是 feat, 不是 fix）
feat | 新功能（feature）
fix | 修补bug
docs | 文档（documentation）
style | 格式（不影响代码运行的变动）
refactor | 重构（即不是新增功能，也不是修改bug的代码变动）
test | 增加测试
chore | 构建过程或辅助工具的变动
