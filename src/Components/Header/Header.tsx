import store from "../../MobX/Store";
import { ESortType } from "../../types";
import { observer } from "mobx-react-lite";
import { ActiveSorts, ActiveTabs } from "../../Constants/constants";
import * as Style from "./style";

interface IProps {
  title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
  const titleText = title[0].toUpperCase() + title.slice(1);
  const handleChangePopular = () => {
    store.changePopularSort(ActiveSorts.popular);
  };
  const handleChangeNew = () => {
    store.changeNewSort(ActiveSorts.new);
  };
  const handleChangeFavorite = () => {
    store.changeFavoriteSort(ActiveSorts.favorite);
  };

  return (
    <Style.HeaderWrap>
      <Style.H1Wrap>{titleText}</Style.H1Wrap>
      {store.activeTab === ActiveTabs.Courses && (
        <Style.NavWrap>
          <Style.ButtonWrap
            onClick={handleChangePopular}
            isColor={store.activeSort === ESortType.Popular}
          >
            <Style.Button>Popular</Style.Button>
            <Style.LineWrap
              isColor={store.activeSort === ESortType.Popular}
            ></Style.LineWrap>
          </Style.ButtonWrap>

          <Style.ButtonWrap
            onClick={handleChangeFavorite}
            isColor={store.activeSort === ESortType.Favorite}
          >
            <Style.Button>Favorite</Style.Button>
            <Style.LineWrap
              isColor={store.activeSort === ESortType.Favorite}
            ></Style.LineWrap>
          </Style.ButtonWrap>

          <Style.ButtonWrap
            onClick={handleChangeNew}
            isColor={store.activeSort === ESortType.New}
          >
            <Style.Button>New</Style.Button>

            <Style.LineWrap
              isColor={store.activeSort === ESortType.New}
            ></Style.LineWrap>
          </Style.ButtonWrap>
        </Style.NavWrap>
      )}
    </Style.HeaderWrap>
  );
};

export default observer(Header);
