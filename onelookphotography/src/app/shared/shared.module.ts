import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ToolbarModule } from 'primeng/toolbar';
import { AccordionModule } from 'primeng/accordion';
import { ChipModule } from 'primeng/chip';
import { HttpClientModule } from '@angular/common/http';
import { SelectModule } from 'primeng/select';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { SkeletonModule } from 'primeng/skeleton';
import { DatePickerModule } from 'primeng/datepicker';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from '../http-service/http.service';

@NgModule({
    declarations: [
    ],
    imports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        FormsModule,
        FloatLabel,
        RouterModule,
        ReactiveFormsModule,
        TableModule,
        CardModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        DialogModule,
        CheckboxModule,
        DividerModule,
        PanelModule,
        AvatarModule,
        ProgressBarModule,
        MessageModule,
        InputNumberModule,
        ToastModule,
        ConfirmDialogModule,
        MenuModule,
        TooltipModule,
        BadgeModule,
        MultiSelectModule,
        DragDropModule,
        ToolbarModule,
        AccordionModule,
        ChipModule,
        HttpClientModule,
        SelectModule,
        ColorPickerModule,
        FieldsetModule,
        FileUploadModule,
        SkeletonModule,
        DatePickerModule,
        RadioButtonModule,
        CommonModule,
    ],
    exports: [
        ButtonModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        FloatLabel,
        RouterModule,
        ReactiveFormsModule,
        TableModule,
        TagModule,
        IconFieldModule,
        InputIconModule,
        DialogModule,
        CheckboxModule,
        DividerModule,
        PanelModule,
        AvatarModule,
        CardModule,
        ProgressBarModule,
        MessageModule,
        InputNumberModule,
        ToastModule,
        ConfirmDialogModule,
        MenuModule,
        TooltipModule,
        BadgeModule,
        MultiSelectModule,
        DragDropModule,
        ToolbarModule,
        AccordionModule,
        ChipModule,
        HttpClientModule,
        SelectModule,
        ColorPickerModule,
        FieldsetModule,
        FileUploadModule,
        SkeletonModule,
        DatePickerModule,
        RadioButtonModule,
    ],
    providers: [HttpService
   ],
    bootstrap: []
})
export class SharedModule { }
