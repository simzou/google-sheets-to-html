<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Page title</title>
    <meta content="Pulling information from Google Docs" name="description">
    <!-- Open Graph -->
    <meta content="Google Doc to JSON"><!-- CSS -->
    <link href=
    "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel=
    "stylesheet"><!-- JavaScript -->

    <script src=
    "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="main.js"></script>
</head>

<body>
    <!-- Template for Using Tables -->
    <script id="table_template" type="text/template">
        <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>URL</th>
                </tr>

                <% _.each(rows, function(row, index) { %>
                    <tr>
                        <td><%= row.id %></td>
                        <td><%= row.title %></td>
                        <td><%= row.description %></td>
                        <td><%= row.imageurl %></td>
                    </tr>

                <% }); %>
            </table>
    </script> 

    <!-- Template for Using Linear Sections -->
    
    <script id="section_template" type="text/template">
        <% _.each(rows, function(row, index) { %>
            <div class="row">
                <h2><%= row.id %>. <%= row.title %></h2>
                    <img src="<%= row.imageurl %>" class="img-responsive" alt="<%=row.title %>" width="50%">
                    <p>
                        <%= row.description %>
                    </p>
            </div>
            <% }); %>
    </script> 

    <!-- Template for Using Bootstrap Grids -->
    
    <script id="grid_template" type="text/template">
        <% _.each(rows, function(row, index) { %>

            <!-- We start a new row at every third item -->
            <% if(index % 3 == 0) { %>
                <div class="row">
            <% } %>

                <div class="col-md-4 same-height-column">
                    <p>Index: <%= index %></p>
                    <h3><%= row.id %>. <%= row.title %></h3>
                    <img src="<%= row.imageurl %>" class="img-responsive" alt="<%=row.title %>" height="50%">
                    <div class="caption">
                    <p>
                        <%= row.description %>
                    </p>
                    </div>
                </div>
            <% if(index % 3 == 2) { %>
                </div>
            <% } %>

            <% }); %>
    </script>

    <header></header>

    <main>
        <div class="container">
            <h2>Sample Table</h2>

            <div id="myTable"></div>

            <h2>Sample Sections</h2>

            <div id="mySection"></div>

            <h2>Sample (Responsive)Grid</h2>

            <div id="myGrid"></div>
        </div>
    </main>

    <footer></footer>
</body>
</html>