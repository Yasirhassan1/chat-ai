
export function useClipboard(){
    // const {setIsCopied } = useContext(CopyContext);

    async function copyText(text:string){
  try{
    await navigator.clipboard.writeText(text);
    // setIsCopied(true)

  
  }
  catch(error){
    console.log(error)
    
  }
}
return {copyText}
}