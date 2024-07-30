import { UserInfo } from "./UserInfo";
import { FavoriteFoods } from "./FavoriteFoods";
import { FavoriteArtist } from "./FavoriteArtist";

export function AllUserInfo() {
  return (
    <div>
      <p>
        Exercise: Create the 3 components bellow on your own, and place them all
        in your app.js file, making sure they are rendered on your application
        in the browser
      </p>
      <p>1. A component containing your personal informatio.n</p> <br />
      <UserInfo /> <br />
      <p>2. A component containing your favorite foods.</p> <br />
      <FavoriteFoods /> <br />
      <p>3. A component containing your favorite artists.</p> <br />
      <FavoriteArtist />
    </div>
  );
}
