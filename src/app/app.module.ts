import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToolsPage } from '../pages/tools/tools';
import { ProtocolsPage } from '../pages/protocols/protocols';
import { ProtocolPage } from '../pages/protocol/protocol';
import { ProtocolGroupsPage } from '../pages/protocol-groups/protocol-groups';
import { ContactsPage } from '../pages/contacts/contacts';
import { SettingsPage } from '../pages/settings/settings';
import { DrugsPage } from '../pages/drugs/drugs';
import { LoginPage } from '../pages/login/login';
import { Agency } from '../providers/agency';
import { Storage } from '@ionic/storage';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

@NgModule({
  declarations: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    ContactsPage,
    DrugsPage,
    LoginPage,
    ProtocolGroupsPage,
    ProtocolPage,
    SettingsPage
  ],
  imports: [
    MarkdownToHtmlModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToolsPage,
    ProtocolsPage,
    ContactsPage,
    DrugsPage,
    LoginPage,
    ProtocolGroupsPage,
    ProtocolPage,
    SettingsPage
  ],
  providers: [
    Agency,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
