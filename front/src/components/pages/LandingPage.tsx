import IssueBar from '../molecules/IssueBar';
import Issue from '../molecules/Issue';
import ProjectItem from '../molecules/ProjectItem';
import GitLog from '../../assets/images/GitLog.png';
const LandingPage = () => {
  return (
    <>
      <ProjectItem
        logoImg={GitLog}
        title={'Project 1'}
        leader={'dbcs'}
        members={['dbcs', 'inte', 'bell']}
        isPinned={true}
      />
      <ProjectItem
        logoImg={GitLog}
        title={'Project 1'}
        leader={'dbcs'}
        members={['dbcs', 'inte', 'bell']}
        isPinned={false}
      />
      <ProjectItem
        logoImg={GitLog}
        title={'Project 1'}
        leader={'dbcs'}
        members={['dbcs', 'inte', 'bell']}
      />
    </>
    // <IssueBar
    //   summary={'이슈 제목'}
    //   epicLink={'에픽'}
    //   assignee={'담당자'}
    //   rank={'우선순위'}
    //   type={'story'}
    //   storyPoints={4}
    // ></IssueBar>
    // <Issue
    //   summary={'이슈 제목'}
    //   epicLink={'에픽'}
    //   assignee={'담당자'}
    //   rank={'우선순위'}
    //   type={'story'}
    //   storyPoints={4}
    // ></Issue>
  );
};

export default LandingPage;
