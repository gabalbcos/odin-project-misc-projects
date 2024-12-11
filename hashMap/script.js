function hashmap(){
  let loadFactor = 0.75;
  let capacity = 16;
  return {
      hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 3;
        }
        return hashCode;
      }

      set(key, value) {
      }

      get(key){

      }

      has(key){

      }
      remove(){

      }

      lenght(){}

      clear(){}

      keys(){}

      values(){}

      entries(){}
  } 
}