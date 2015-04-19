import React, { PropTypes } from "react";
import { connectToStores } from "fluxible/addons";

import Thumbnail from "../components/Thumbnail";

if (process.env.BROWSER) {
  require("../style/ThumbnailCollection.scss");
}

class FeaturedPage extends React.Component {

  static propTypes = {
    photos: PropTypes.array.isRequired
  }

  render() {
    const { photos } = this.props;
    return (
      <div>

        <div className="ThumbnailCollection">
          {
            photos.map(photo => <Thumbnail key={photo.id} size="small" photo={photo} />)
          }
        </div>

      </div>
    );
  }

}

FeaturedPage = connectToStores(FeaturedPage, ["PhotoStore"], (stores) =>
  ({ photos: stores.PhotoStore.getFeatured() })
);

export default FeaturedPage;
