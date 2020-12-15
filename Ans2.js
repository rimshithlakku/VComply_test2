<ejs-schedule width="100%" height="550px" [eventSettings]='eventSettings' [selectedDate]="selectedDate" (actionBegin)="onActionBegin($event)"></ejs-schedule>
onActionBegin(args: ActionEventArgs) { // Here checking the appointment creation time is available or not, and proceed to create the appointment if available.   

    if (args.requestType === "eventCreate") {

      let eventData: any = args.data;

      let scheduleElement: Element = document.querySelector('.e-schedule');

      let scheduleObj: Schedule = ((scheduleElement as EJ2Instance).ej2_instances[0] as Schedule);

      if (!scheduleObj.isSlotAvailable(eventData.StartTime, eventData.EndTime)) // Here the isSlotAvailable public method used to check for the availability of the mentioned time slot

        args.cancel = true;

    }

  }