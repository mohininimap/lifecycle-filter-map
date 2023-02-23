const FilterEx=()=>{
    const studnames=["Priya","Kanchan","Kalyani","Chanda","Gaury"]

  function dispStud(){
    return(
        <>
        {studnames.filter(name=>!name.includes('K')).map((stud)=><>
      <h1>{stud}</h1>
      </>)}
       </>
    )
  }
return(
    <>{dispStud()} </>
)
}
export default FilterEx;


