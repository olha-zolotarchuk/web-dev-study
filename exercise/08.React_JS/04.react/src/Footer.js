import React from "react";
import { useStoreState } from "easy-peasy";

const Footer = () => {
  // const today = new Date();
  const postCount = useStoreState((state) => state.postCount);
  return (
    <React.Fragment>
      <footer className="Footer">
        {/* <p>Copyright &copy; {today.getFullYear()}</p>
         */}
        <p>{postCount} Blog Posts</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
