// const MapEx=()=>{
//     const students=["Mohini","Priya","Kalyani","Kanchan","Chanda","Gaury"]
// //     for(let i=0;i<students.length;i++){
// // console.log(students[i])
// //     }

// function displayStudent(){
//     return(
//         <>
//         {students.map((stud)=>

// <h1 key={stud}>{stud}</h1>
// )}
//         </>
//     )
// }
//     return(
// <>
// {displayStudent()   }
// </>
//     )
// }
// export default MapEx;

// ------------------------------------------------------

const MapEx=()=>{
    const friends=["Mohini","Priya","Kalyani","Kanchan","Chanda","Gaury"]

    function xyz(){
        return(
            <>
            {friends.map((item)=>
                <h1>{item}</h1>
            )}
            </>
        )
    }
    return(
<>
{xyz()}
</>
    )
}

export default MapEx;