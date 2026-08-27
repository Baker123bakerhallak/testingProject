const Title = async (props) => {
  const title = await props.params;
  console.log(title.title);
  return <div>show Title Articels =====&gt; {title.title}</div>;
};

export default Title;
