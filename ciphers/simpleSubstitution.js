exports.encryptSimpleSubstitution = (text, alphabet) => {
    plaintext = text.toLowerCase();  
    alphabet = alphabet.toLowerCase().replace(/[^a-z]/g,""); 
    if(alphabet.length != 26){ return "alphabet must be 26 characters in length" }
    ciphertext = ""; var re = /[a-z]/; 
    for(i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += alphabet.charAt(plaintext.charCodeAt(i)-97); 
        else  ciphertext += plaintext.charAt(i); 
    } 
    return ciphertext; 
}
exports.decryptSimpleSubstitution = (SSText, alphabet) => {
    ciphertext = SSText.toLowerCase();  
    alphabet = alphabet.toLowerCase().replace(/[^a-z]/g, ""); 
    if(alphabet.length != 26){ return "alphabet must be 26 characters in length" }
    plaintext = ""; var re = /[a-z]/; 
    for(i=0; i<ciphertext.length; i++){ 
        if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode(alphabet.indexOf(ciphertext.charAt(i))+97); 
        else  plaintext += ciphertext.charAt(i); 
    } 
    return plaintext; 
}