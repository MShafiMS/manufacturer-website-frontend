import React from "react";

const Blogs = () => {
  return (
    <div>
      <label class="swap swap-flip text-9xl">
        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" />

        <div class="swap-on">😈</div>
        <div class="swap-off">😇</div>
      </label>
    </div>
  );
};

export default Blogs;
