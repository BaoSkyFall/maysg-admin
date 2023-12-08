import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// #region Antd Modules
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
//#endregion
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzAutocompleteModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzListModule,
    NzTabsModule,
    NzSpinModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzEmptyModule,
    NzPaginationModule,
    NzPopoverModule,
    NzStepsModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzModalModule,
    NzGridModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzRadioModule,
    NzIconModule.forRoot(icons)],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzAutocompleteModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzListModule,
    NzTabsModule,
    NzSpinModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzEmptyModule,
    NzPaginationModule,
    NzPopoverModule,
    NzStepsModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzModalModule,
    NzGridModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzRadioModule],
  providers: [
    CommonModule,
    TranslateModule,
    FormsModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzAutocompleteModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzListModule,
    NzTabsModule,
    NzSpinModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzEmptyModule,
    NzPaginationModule,
    NzPopoverModule,
    NzStepsModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzModalModule,
    NzGridModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzRadioModule]
})
export default class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    }
  }
}
