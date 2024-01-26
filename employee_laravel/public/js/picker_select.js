
                                                                $('.yearpicker').yearpicker();
                                                                $('.yearpicker').yearpicker({
                                                                    year:null,
                                                                    startYear:null,
                                                                    endYear:null,
                                                                    itemTag:'li',
                                                                    selectedClass:'selected',
                                                                    disabledClass:'disabled',
                                                                    hideClass:'hide',
                                                                    template: `<div class="yearpicker-container">
                                                                    <div class="yearpicker-header">
                                                                    <div class="yearpicker-prev" data-view="yearpicker-prev">&lsaquo;</div>
                                                                    <div class="yearpicker-current" data-view="yearpicker-current">SelectedYear</div>
                                                                    <div class="yearpicker-next" data-view="yearpicker-next">&rsaquo;</div>
                                                                    </div>
                                                                    <div class="yearpicker-body">
                                                                    <ul class="yearpicker-year" data-view="years">
                                                                    </ul>
                                                                    </div>
                                                                    </div>`,
                                                                });
                                                                $('.yearpicker').yearpicker({
                                                                    onShow:null,
                                                                    onHide:null,
                                                                    onChange:function(value){}
                                                                });