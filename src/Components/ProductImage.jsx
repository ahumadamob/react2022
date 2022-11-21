import { Card } from "react-bootstrap"

function ProductImage({src, smallsize}){

    const styles = {
        smallDiv: {
            width: '18rem',
            height: '18rem',
            backgroundColor: 'gainsboro'
        },
        smallCard: {
            maxWidth: '18rem',
            maxHeight: '18rem',
            backgroundColor: 'gainsboro'
        },        
        normalDiv: {
            width: '30rem',
            height: '30rem',
            backgroundColor: 'gainsboro'
        }, 
        normalCard: {
            maxwidth: '30rem',
            maxheight: '30rem',
            backgroundColor: 'gainsboro'
        },       
    }
    if(src){
        if(smallsize){
          return(
            <Card.Img src={src} style={styles.smallCard} />
            )  
        }else{
            return(
             <Card.Img src={src} style={styles.normalCard} />   
            )            
        }
        
    }else{
        if(smallsize){
            return(
                <div style={styles.smallDiv}></div>
            )    
        }else{
            return(
                <div style={styles.normalDiv}></div>
            )            
        }        
    }
}

export default ProductImage