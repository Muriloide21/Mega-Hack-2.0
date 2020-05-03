import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function Popover({ title, htmltext, content }){
    const pop = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">{title}</Popover.Title>
          <Popover.Content>
            {htmltext}
          </Popover.Content>
        </Popover>
      );
      
      const Popover = (content) => (
        <OverlayTrigger trigger="hover" placement="right" overlay={pop}>
          {content}
        </OverlayTrigger>
      );
      
      render(<Popover />);
}