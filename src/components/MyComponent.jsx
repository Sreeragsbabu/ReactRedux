import  { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getdata, getUsers } from "../redux/actions";

const MyComponent = ({ getdata,getUsers, dummyData }) => {
  useEffect(() => {
    getdata();
    getUsers();
  }, [getdata, getUsers]);

  console.log(dummyData, 'aaaaaaaaaaa')

  return (
    <>
    {dummyData.map(el => (
      <div key={el.id}>{el.id}: {el.title}</div>
    ))}
    </>
  )
  
  
};

MyComponent.propTypes = {
  getdata: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  dummyData: PropTypes.array
};

const mapStateToProps = (state) => ({
  dummyData: state.demo.dummyData,
});

export default connect(mapStateToProps, { getdata, getUsers })(MyComponent);
