 const path = require('path');

 //日志根目录
 const baseLogPath = path.resolve(__dirname, '../logs')

 //错误日志目录
 const errorPath = "/error";
 //错误日志文件名
 const errorFileName = "error";
 //错误日志输出完整路径
 const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;

 //响应日志目录
 const responsePath = "/response";
 //响应日志文件名
 const responseFileName = "response";
 //响应日志输出完整路径
 const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

 module.exports = {
   "appenders": {
     "out": {
       "type": 'console'
     },
     "errorLogger": {
       "type": "dateFile",
       "filename": errorLogPath,
       "encoding": "utf-8",
       "maxLogSize": 2000000,
       "numBackups": 5,
       "pattern": "-yyyy-MM-dd.log",
       "alwaysIncludePattern": true,
       "path": errorPath //自定义属性，错误日志的根目录
     },
     "resLogger": {
       "type": "dateFile",
       "filename": responseLogPath,
       "encoding": "utf-8",
       "maxLogSize": 2000000,
       "numBackups": 5,
       "pattern": "-yyyy-MM-dd.log",
       "alwaysIncludePattern": true,
       "path": responsePath
     }
   },
   "categories": {
     "default": {
       "appenders": ['out'],
       "level": 'info'
     },
     "errorLogger": {
       "appenders": ['errorLogger'],
       "level": 'error'
     },
     "resLogger": {
       "appenders": ['resLogger'],
       "level": 'info'
     },
   },
   // "levels":{
   // "errorLogger":"ERROR",
   // "resLogger":"ALL"
   // },
   "baseLogPath": baseLogPath //logs根目录
 }