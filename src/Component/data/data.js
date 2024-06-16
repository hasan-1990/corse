import imge1 from "../../assets/1.jpg";
import Corse from "../Corse";
let  corses= [
    {  id:"1", tittlename:"a1 سطح مبتدی" , name:"A1", image:imge1},
    {  id:"2", tittlename:"a2 سطح متوسطه", name:"B2" , image:imge1},
    {  id:"3", tittlename:"a3 سطح پیرفته", name:"C3" , image:imge1},
]
    

export const getcorses = () => {
    return corses;
}
export const getcorse = (id) => {
    return corses.find(Corse => Corse.id === id);
}
export const getproduct = (id) => {
    return corses.find(Product => Product.id === id);
}

export const deletcorse =id =>{
    corses = corses.filter(
      book =>Corse.id !== id
    )
    }