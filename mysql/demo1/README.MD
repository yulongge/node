#mysql&&redis
##配置环境变量
### 代码块
``` javascript
vim .bash_profile
export PATH=${PATH}:/usr/local/mysql/bin
export PATH=${PATH}:/usr/local/Cellar/redis/3.0.1/bin
```

###redis的启动和关闭
``` javascript
  redis-server //启动
  redis-cli //关闭
```
