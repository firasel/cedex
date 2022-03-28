import Image from "next/image";
import React from "react";
import { FaComments, FaRegUserCircle } from "react-icons/fa";
import postImg from "../../../assets/images/blog/blog2.jpg";
import blogData from "../../../data/blogData";
import style from "./PostContent.module.scss";

const PostContent = () => {
  return (
    <div className={style.postContentSection}>
      <div className="blogContent">
        <Image layout="responsive" src={postImg} alt="post image" />
        <div className="comment">
          {blogData?.blogs[0]?.posted && (
            <span>
              <FaRegUserCircle fontSize={25} /> {blogData?.blogs[0]?.posted}
            </span>
          )}
          {blogData?.blogs[0]?.posted && blogData?.blogs[0]?.comments && (
            <span> / </span>
          )}
          {blogData?.blogs[0]?.comments && (
            <span>
              <FaComments fontSize={25} /> {blogData?.blogs[0]?.comments} Comments
            </span>
          )}
        </div>
        <div className="content">
          <h2>{blogData?.blogs[0]?.title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vestibulum commodo sapien sed tempus. Aliquam gravida nunc ac
            maximus ultrices. Nulla vestibulum nulla ut mauris tincidunt
            accumsan. Sed laoreet sem nunc, id volutpat diam imperdiet a.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Suspendisse a dictum leo. Nunc malesuada ultricies sodales. Aliquam
            nec laoreet leo, vitae pretium ante.
          </p>
          <h4>Lorem ipsum dolor sit amet, consectetur</h4>
          <p>
            Aliquam lacus magna, blandit tempus dolor id, mollis luctus magna.
            Mauris ipsum lacus, vulputate in bibendum vitae, lobortis vitae mi.
            Vestibulum vitae feugiat nisl. Nunc volutpat lacus augue, at
            lobortis diam dapibus ut. Integer sollicitudin blandit commodo.
            Vestibulum ultrices ac metus quis fringilla. Curabitur sit amet
            risus justo. Aliquam auctor egestas est non ullamcorper. Cras vel
            nunc posuere, blandit magna at, rutrum massa. Donec quis viverra
            lectus, sed lobortis eros. Fusce quis felis at leo bibendum faucibus
            eu in ipsum. Fusce placerat massa ut ante facilisis, at maximus
            lorem ullamcorper. Praesent non eleifend mauris, non dapibus arcu.
            Curabitur faucibus vehicula laoreet.
          </p>
          <h4>Aliquam lacus magna, blandit tempus</h4>
          <p>
            Duis a sapien eget turpis commodo imperdiet sit amet a nisl. Aliquam
            egestas aliquam massa, eu dapibus tortor convallis vel. Nulla
            molestie eget sem vel bibendum. Vestibulum venenatis sodales varius.
            In feugiat lorem vel facilisis iaculis. Vivamus cursus accumsan
            nibh, sed pulvinar nisi pretium scelerisque. Quisque tempus
            malesuada nibh, a egestas enim vulputate sit amet. Nulla accumsan
            malesuada quam, at ullamcorper ipsum porttitor quis. Aenean
            convallis porta magna eget tempor. Donec blandit tristique augue,
            quis aliquam ex. In hendrerit mattis urna, consequat facilisis
            ligula commodo eu. In sit amet elementum metus. Curabitur blandit
            laoreet ipsum a accumsan.
          </p>
          <h4> Nunc pulvinar id orci ac maximus</h4>
          <p>
            Nunc pulvinar id orci ac maximus. Nunc egestas ornare turpis a
            sollicitudin. Maecenas vehicula mauris tristique, bibendum ligula
            nec, feugiat arcu. Sed vitae viverra nulla. Curabitur a ante sed
            velit eleifend condimentum a ac eros. Aliquam tristique quam eu
            libero semper, non finibus augue sollicitudin. Morbi ac ligula id
            dui pretium fermentum vitae ac ante. Mauris dapibus est ac augue
            lobortis condimentum. Fusce ante mauris, mattis vel velit quis,
            facilisis blandit nibh. In a metus a felis dictum dictum. Nunc eget
            congue justo. Sed in malesuada dui. Fusce lacinia augue vel porta
            rutrum. Phasellus quis est venenatis, pharetra augue consequat,
            pretium libero. Vivamus id pretium ante, sed tincidunt neque.
          </p>
          <p>
            Pellentesque vel eleifend massa. Suspendisse ac blandit ante, eu
            laoreet ipsum. Curabitur consectetur, enim eget mattis aliquet,
            sapien nunc ornare elit, eu finibus augue purus sed nisi. Fusce
            neque nibh, dapibus sit amet sagittis ut, tincidunt sit amet est.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Maecenas fermentum purus a euismod congue.
            Aliquam ac tempor nulla, nec varius metus. Praesent libero nisi,
            imperdiet et nunc sit amet, consequat convallis lectus. Proin et mi
            pulvinar, gravida nulla ut, dictum velit. Pellentesque in neque eu
            tellus tincidunt ullamcorper. Suspendisse faucibus augue suscipit,
            tempus orci vel, feugiat felis. Aenean fringilla ligula ut ultricies
            dapibus. Nullam blandit posuere purus vitae pellentesque.
          </p>
          <p>
            Aliquam vestibulum magna vitae augue venenatis porttitor. Donec
            mollis turpis quis dolor vestibulum accumsan. Sed aliquet risus a
            volutpat condimentum. Nullam erat mauris, ornare vel pharetra in,
            imperdiet sed orci. Quisque convallis nisi mollis augue efficitur,
            ut dignissim leo posuere. Suspendisse ullamcorper ullamcorper
            tortor, at dignissim diam venenatis sed. Suspendisse venenatis
            laoreet magna, eget viverra purus vestibulum a. Pellentesque in
            consectetur libero. Suspendisse tempor justo in nisi placerat
            malesuada. Quisque ut risus justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
