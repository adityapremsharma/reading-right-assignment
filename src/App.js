import "./scss/main.scss";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { connect } from "react-redux";
import { input, fetchImages } from "./redux/actions";
import ImageDisplay from "./components/ImageDisplay";
import { slice, concat } from "lodash";

function App(props) {
  const limit = 10;
  const data = props.images;
  const length = props.images.length;
  const [name, setName] = useState("");
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(data, 0, limit));
  const [index, setIndex] = useState(limit);

  const loadMore = () => {
    console.log(showMore);
    const newIndex = index + limit;
    const newShowMore = newIndex < length - 1;
    const newList = concat(list, slice(data, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name !== props.search) {
      setName(props.search);
      props.fetchImages(props.search);
    }
  };

  useEffect(() => {
    console.log("hi");
    setList(slice(data, 0, limit));
    setIndex(limit);
    setList(slice(data, 0, limit));
    setShowMore(true);
  }, [data]);

  return (
    <div className="home">
      <SearchBar
        onSubmit={onSubmit}
        value={props.search}
        onChange={(e) => props.input(e.target.value)}
      />
      <ImageDisplay
        images={list}
        allImagesCount={length}
        name={name}
        onClick={loadMore}
        showMore={showMore}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    search: state.data.search,
    images: state.data.images,
  };
};

export default connect(mapStateToProps, { input, fetchImages })(App);
