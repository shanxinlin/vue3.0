import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
  input: './src/index.js', // 引入的文件
  output: {
    format: 'umd', // amd commonjs规范  默认将打包后的结果挂载到window上
    file: 'dist/umd/vue.js', // 打包出的vue.js 文件  new Vue
    name: 'Vue',
    sourcemap: true //开源调试可以找到源代码的报错位置
  },
  plugins: [
    babel({ // 解析es6 -》 es5
      exclude: "node_modules/**" // 排除文件的操作 glob  
    }),
    process.env.ENV === 'development' ? serve({ // 开启本地服务
      open: true,
      openPage: '/public/index.html', // 打开的页面
      port: 3000,
      contentBase: ''
    }) : null
  ]
}