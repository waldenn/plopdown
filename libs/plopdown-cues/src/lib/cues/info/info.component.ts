import InfoSchema from './info.schema.json';
import { EditModeService } from './../../edit-mode.service';
import { fadeIn, fadeOut } from 'ng-animate';
import {
  trigger,
  transition,
  sequence,
  useAnimation
} from '@angular/animations';
import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { PlopdownBaseComponent } from '../../models/plopdown-base.component';
import { PlopdownInfo } from './info.model';

@Component({
  selector: 'plopdown-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('infoFade', [
      transition(
        'void => *',
        sequence([
          useAnimation(fadeIn, {
            params: { timing: 0.4 }
          })
        ])
      ),
      transition(
        '* => void',
        sequence([
          useAnimation(fadeOut, {
            params: { timing: 0.4 }
          })
        ])
      )
    ])
  ]
})
export class InfoComponent extends PlopdownBaseComponent<PlopdownInfo> {
  public schema = InfoSchema;

  constructor(editMode: EditModeService) {
    super(editMode);
  }

  @HostBinding('@infoFade') animate;
}