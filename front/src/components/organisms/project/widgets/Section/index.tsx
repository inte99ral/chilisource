// Styles
import { StyledSection, StyledSectionColumn } from './style';

// Components
import { WidgetBlock } from 'components/molecules/WidgetBlock';

interface propTypes {
  data?: string;
}

function Section({}: propTypes) {
  return (
    <>
      <StyledSection>
        <StyledSectionColumn>
          <div>sd</div>
          <WidgetBlock type="GANTT"></WidgetBlock>
          <WidgetBlock type="CALENDAR"></WidgetBlock>
          <WidgetBlock type="JIRA"></WidgetBlock>
          <WidgetBlock type="SSAFYGITLAB"></WidgetBlock>
          <WidgetBlock type=""></WidgetBlock>
        </StyledSectionColumn>

        <StyledSectionColumn>
          <WidgetBlock type="GANTT"></WidgetBlock>
        </StyledSectionColumn>
      </StyledSection>
    </>
  );
}

export default Section;
