<script>
    $(document).ready(function() {
        $('#example').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                'copyHtml5',
                {
                    extend: 'excelHtml5',
                    title: 'Project Report - ' + newDate().toJSON().slice(0, 10).replace(/-/g,'-')
                },
                'pdfHtml5'
            ]
        })
    })
</script>