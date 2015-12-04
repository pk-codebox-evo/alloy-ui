YUI.add("aui-datatable-date-cell-editor",function(e,t){var n=e.getClassName("celleditor","element"),r;r=e.Component.create({NAME:"dateCellEditor",EXTENDS:e.BaseCellEditor,ATTRS:{bodyContent:{value:""},calendar:{setter:"_setCalendar",validator:e.Lang.isObject,value:null},dateFormat:{value:"%Y-%m-%d",validator:e.Lang.isString},inputFormatter:{value:function(t){var n=this,r=[];return e.Array.each(t,function(e){r.push(n.formatDate(e).toString())}),r}},outputFormatter:{value:function(t){var n=this,r=[];return e.Array.each(t,function(t){r.push(e.DataType.Date.parse(n.get("dateFormat"),t))}),r}}},prototype:{ELEMENT_TEMPLATE:'<input class="'+n+'" type="hidden" />',initializer:function(){var t=this;t.after("calendar:dateClick",e.bind(t._afterDateSelect,t))},getElementsValue:function(){var e=this;return e.calendar.get("selectedDates")},formatDate:function(t){var n=this,r=n.get("dateFormat"),i=n.get("locale");return e.DataType.Date.format(t,{format:r,locale:i})},_afterDateSelect:function(){var t=this,n=t.calendar.get("selectedDates");t.elements.val(e.Array.invoke(n,"getTime").join(","))},_afterRender:function(){var t=this;e.DateCellEditor.superclass._afterRender.apply(t,arguments),t.calendar=(new e.Calendar(t.get("calendar"))).render(t.bodyNode)},_setCalendar:function(t){var n=this;return e.merge({bubbleTargets:n},t)},_syncElementsFocus:function(){var t=this,n=t.calendar,r=n.get("selectedDates")[0];e.DateCellEditor.superclass._syncElementsFocus.apply(t,arguments),r||(r=n.get("date")),n.focus(),n._highlightDateNode(r)},_uiSetValue:function(t){var n=this,r=n.calendar,i;r&&(e.Lang.isArray(t)||(t=[t]),i=n.formatValue(n.get("outputFormatter"),t),r._clearSelection(),i[0]?(r.set("date",i[0]),r.selectDates(i)):r.set("date",new Date))}}}),e.DateCellEditor=r},"3.0.3-deprecated.1",{requires:["aui-datatable-base-options-cell-editor"]});
