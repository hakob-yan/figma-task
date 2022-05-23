import store from "../../MobX/Store";
import { observer } from "mobx-react-lite";
import { Colors } from "../../Constants/constants";
import * as Style from "./style";
import PlayIcon from "../../assets/Play";

const Courses: React.FC = observer(() => {
  return (
    <Style.Images>
      {store.courses.map((elem, index) => (
        <Style.Img key={`courses ${index}`} $imageUrl={elem.url}>
          <Style.Title>{elem.title}</Style.Title>
          <Style.Lesson>{elem.lessons} lessons</Style.Lesson>
          <Style.Duration>{elem.duration}</Style.Duration>
          <Style.Info>{`|Pop: ${elem.popular} |New: ${elem.new}|Fav:${elem.favorite}|`}</Style.Info>
          <Style.IconWrap>
            <PlayIcon color={Colors.Icon} />
          </Style.IconWrap>
        </Style.Img>
      ))}
    </Style.Images>
  );
});
export default Courses;
