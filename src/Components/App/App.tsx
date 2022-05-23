import store from "../../MobX/Store";
import { observer } from "mobx-react-lite";
import { AppWrapper, Container, Page } from "./style";
import { ActiveTabs } from "../../Constants/constants";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Courses from "../../Pages/Courses/Courses";
import Notes from "../../Pages/Notes/Notes";
import Public from "../../Pages/Publics/Publics";

const App: React.FC = observer(() => {
  return (
    <AppWrapper>
      <Sidebar />
      <Container>
        <Header title={store.activeTab} />
      
          <Page>
            {store.activeTab === ActiveTabs.Courses && <Courses />}
            {store.activeTab === ActiveTabs.Notes && <Notes />}
            {store.activeTab === ActiveTabs.Public && <Public />}
          </Page>
     
      </Container>
    </AppWrapper>
  );
});

export default App;

// enum, styled components
// components / Sidebar/index.tsx,styles.ts, interface.ts
// pages /Home/index.tsx
// mobx
//assets
