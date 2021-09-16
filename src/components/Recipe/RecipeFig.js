const RecipeFig = (props) => {
  const { image_url: imgUrl, title } = props.recipe;
  return (
    <figure className="recipe__fig">
      <img src={imgUrl} alt={title} className="recipe__img" />
      <h1 className="recipe__title">
        <span>{title}</span>
      </h1>
    </figure>
  );
};

export default RecipeFig;
