# 重命名Mysql数据库

## 一、问题或场景描述

&emsp;&emsp;Mysql必知必会一书中提供了数据库crashcourse，希望复制它的内容用于Aliyun JavaTech 学习，新的数据库名 databaseforjdbclearningofalijavacourse

### 环境信息

- Operating System: Windows 10
- Mysql Server Version: 8.0.11 for Win64 on x86_64 (MySQL Community Server - GPL)

## 二、解决方案

### 步骤一: 创建空数据库

&emsp;&emsp;1. 使用DDL即Database Definition Language创建数据库
注释：DDL全面为数据库定义语言，属于SQL

```sql
-- Running using Mysql Client such as MySQL Command Line Client, MySQL Workbench...
CREATE DATABASE [IF NOT EXISTS] databaseforjdbclearningofalijavacourse [CHARSET=utf8]
```
&emsp;&emsp;或者使用mysqladmin工具创建数据库
```cmd
# Running using Windows Shell Such as cmd, powershell...
mysqladmin -u { MysqlUsername } -p{ MysqlPasword } create databaseforjdbclearningofalijavacourse
```

### 步骤二: 转储数据库

&emsp;&emsp;2 使用mysqldump工具创建crashcourse数据库的Login backups即逻辑副本
注释：Login backups指的是一种复制表结构和数据而不复制实际数据文件的备份，mysqldump的作用是转储，它输出一组SQL语句，Mysql可以执行这些语句来重现原始数据库对象定义和表数据。

```cmd
mysqldump -u { MysqlUsername } -p{ MysqlPasword } -R crashcourse > crashcourse.sql
# 1. -p 和密码之间没有 space
# 2. -R 标志表示转储文件应保留所有 stored procedure 和 function
```

### 步骤三: 还原数据库

&emsp;&emsp;3.使用mysql将转储文件(Dump File)亦可被称为SQL脚本(SQL Script)导入新数据库

```sql
SOURCE {Relative path }\crashcourse.sql
```
&emsp;&emsp;或者
```cmd
mysql -u { MysqlUsername } -p{ MysqlPasword } databaseforjdbclearningofalijavacourse < crashcourse.sql
```

### 步骤四: 删除数据库

&emsp;&emsp;注释：可以不删除，如果担心操作失误，留有备份待日后删除保持数据库环境Clean

```sql
DROP DATABASE [IF EXISTS] databaseforjdbclearningofalijavacourse
```
&emsp;&emsp;或者
```cmd
mysqladmin -u { MysqlUsername } -p{ MysqlPasword } drop databaseforjdbclearningofalijavacourse
```
