let Img = ({ classAditional, url }) => {
  return (
    <div className={classAditional}>
      <img src={require(`../images/${url}.png`)} alt="logo"/>
    </div>
  );
};

export default Img;