# Loki adapter for react-native
---

### Requirement
This module need ```react-native-fs``` for native filesystem access

### Installation
```npm install loki-react-native-adapter```

or

```yarn add loki-react-native-adapter```

### How to use
- Step 1: Import module

```
import  LokiReactNativeAdapter from 'loki-react-native-adapter'

```

- Step 2: Declare new Loki object with adapter option

```
var db = new Loki('db.json',{adapter:new LokiReactNativeAdapter()})
```

- Step 3: Do what you want with Loki Api


```
var db = new Loki('db.json',  
  {adapter:new LokiReactNativeAdapter()}
)

var user = db.addCollection("User")

user.insert({
  "name": "Marsch",
  age: 21
})

user.insert({
  "name": "Sky",
  age: 22
})

db.saveDatabase()

console.log("Data", user.data);
```


```
db.loadDatabase({},function(){
  user = db.getCollection("User")
  console.log("DATA", user.data);
})
```
