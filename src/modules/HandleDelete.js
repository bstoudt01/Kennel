import AnimalManager from './AnimalManager'

const HandleDelete = (props) => {
  const history=props.history
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    //set isloading to true so it cant be clicked again while the new url populates
    AnimalManager.delete(props.animalId).then(() =>
      history.push("/animals")
    );
  };

  export default HandleDelete
