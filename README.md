# heatmap
A lightweight script to map clicks

## Methods
### post /event
Expected data (application/x-www-form-urlencoded):
```
page: (String) Full page url
x: (Integer) X axis click
y: (Integer) Y axis click
w: (Integer) Window width
h: (Integer) Window height
```

### get /events
Returns:
```json
{
    pages: (Array) Pages
}
```

### get /event/:page
Expected data (querystring):
```
page: (String) Full page url [encoded]
```
Returns:
```json
{
    clicks: [
        {
            x: (Integer) X axis click,
            y: (Integer) Y axis click,
            w: (Integer) Window width,
            h: (Integer) Window height
        }
    ]
}
```

### get /event/:page/:datefrom/:dateto
Expected data (querystring):
```
page: (String) Full page url [encoded]
datefrom: (Date) Date from [YYYY-MM-DD]
dateto: (Date) Date to [YYYY-MM-DD]
```
Returns:
```json
{
    clicks: [
        {
            x: (Integer) X axis click,
            y: (Integer) Y axis click,
            w: (Integer) Window width,
            h: (Integer) Window height,
            date: (Date) Date in MongoDB ISO format
        }
    ]
}
```

## License
This code is licensed under the MIT license. See [LICENSE](LICENSE) for more
information.