const HtmlWebPackPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports =  (_, args) => {
  const currentPath = path.join(__dirname)
  const pathENV = currentPath + '/.env'
  const env = require('dotenv').config({path:pathENV}).parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`${next}`] = JSON.stringify(env[next])
    return prev
  }, {})
  const envReturn = {process:{env:envKeys}}
  if(args.mode === 'development') {
    return {
      entry: './src/index.tsx',
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          'pages': path.resolve(__dirname, 'src/pages'),
          'assets': path.resolve(__dirname, 'src/assets'), 
          'components': path.resolve(__dirname, 'src/components'), 
          'services': path.resolve(__dirname, 'src/services'), 
          'store': path.resolve(__dirname, 'src/store'), 
          'utils': path.resolve(__dirname, 'src/utils'), 
        }
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.(ogg|mp3|wav|mpe?g)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader'
              }
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                  name: 'assets/svg/[name].[hash].[ext]'
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
            options: {
              name: 'assets/font/[name].[ext]',
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[hash].[ext]'
                }
              }
            ]
          }
        ]
      },
      optimization: {
        minimize:true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
              compress:true,
              mangle:true,
              sourceMap:true
            },
          }),
          new CssMinimizerPlugin()
        ],
        splitChunks: {
          chunks: 'async',
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          }
        }
      },
      performance: {
        hints: false
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
          filename: './index.html',
          favicon: path.join(__dirname, 'public', 'logo.jpg')
        }),
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].css'
        }),
        new DefinePlugin(envReturn)
      ]
    }
  }
  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        'pages': path.resolve(__dirname, 'src/pages'),
        'assets': path.resolve(__dirname, 'src/assets'), 
        'components': path.resolve(__dirname, 'src/components'), 
        'services': path.resolve(__dirname, 'src/services'), 
        'store': path.resolve(__dirname, 'src/store'), 
        'utils': path.resolve(__dirname, 'src/utils'), 
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
                name: 'assets/svg/[name].[hash].[ext]'
              },
            },
          ],
        },
        {
          test: /\.(ogg|mp3|wav|mpe?g)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: 'assets/font/[name].[ext]',
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/img/[name].[hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimize:true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
            compress:true,
            mangle:true
          },
        }),
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        }
      }
    },
    performance: {
      hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    plugins: [
      new DefinePlugin(envReturn),
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        filename: './index.html',
        favicon: path.join(__dirname, 'public', 'logo.jpg'),
        minify: true
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css'
      }),
      new workboxPlugin.GenerateSW({
        swDest: 'sw.ts',
        clientsClaim: true,
        skipWaiting: true,
        maximumFileSizeToCacheInBytes:1000000
      }),
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          level:11,
        },
        threshold: 10240,
        minRatio: 0.8,
      })
    ]
  }
}