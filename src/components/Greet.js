import react from 'react'

// function Greet(){
//     return <h1> Good morning Duke lester </h1>
// };

const Greet = ({name, heroName, age}) => {
    // console.log(props)
    // const Greet = (props) => {
    //     const {name, heroName, age} = props;
    // }
   return(
       <div>

       <h1> Hello {name} a.k.a {heroName} I am Learning React Js I am {age} Years old </h1>
           {/*{props.children}*/}
       </div>
   )}
export default Greet
// export default Greet