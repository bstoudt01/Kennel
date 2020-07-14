
const HandleDelete = (props) => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    props.setIsLoading(true);
    props.Manager.delete(props.Id).then(() =>
      props.history.push("/animals")
    );
  };

  export default HandleDelete