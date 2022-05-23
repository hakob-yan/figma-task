import "./style";
import * as Style from "./style";
import CoursesIcon from "../../assets/Courses";
import NotesIcon from "../../assets/Notes";
import PublicsIcon from "../../assets/Publics";
import store from "../../MobX/Store";
import { observer } from "mobx-react-lite";
import { ActiveTabs } from "../../Constants/constants";
// don't use inline functions, instead declare above
// use styled components to prevent inline styling in jsx
// use the constant that we had declared for 'notes', 'courses'...

const Sidebar: React.FC = observer(() => {
  const getActiveTabHandler = (tab: string) => () => {
    store.changeActiveTab(tab);
  };
  const isActiveColor = (tab:string):boolean => {
    return store.activeTab === tab
  }

  return (
    <Style.SidebarWrap>
      <Style.IconsWrap
        border={isActiveColor(ActiveTabs.Courses)}
        onClick={getActiveTabHandler(ActiveTabs.Courses)}
             >
        <CoursesIcon color={isActiveColor(ActiveTabs.Courses)} />
      </Style.IconsWrap>

      <Style.IconsWrap
        border={isActiveColor(ActiveTabs.Notes)}
        onClick={getActiveTabHandler(ActiveTabs.Notes)}
      >
        <NotesIcon color={isActiveColor(ActiveTabs.Notes)} />
      </Style.IconsWrap>

      <Style.IconsWrap
        border={isActiveColor(ActiveTabs.Public)}
        onClick={getActiveTabHandler(ActiveTabs.Public)}
      >
        <PublicsIcon color={isActiveColor(ActiveTabs.Public)} />
      </Style.IconsWrap>
    </Style.SidebarWrap>
  );
});

export default Sidebar;
