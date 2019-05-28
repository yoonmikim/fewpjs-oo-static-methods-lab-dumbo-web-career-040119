class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
  
  // static sanitize(str) {
  //   let st = ''
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === "-" || str[i] === "'" || str[i] === " ") {
  //       str += str[i]
  //     }
  //   }
  //   return st
  // }
  
   static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

}
