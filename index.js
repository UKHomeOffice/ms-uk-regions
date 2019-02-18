'use strict'

const ukRegions = [
    {value: 'Not known', label: 'Not known'},
    {value: 'Bedfordshire', label: 'Bedfordshire'},
    {value: 'Berkshire', label: 'Berkshire'},
    {value: 'Bristol', label: 'Bristol'},
    {value: 'Buckinghamshire', label: 'Buckinghamshire'},
    {value: 'Cambridgeshire', label: 'Cambridgeshire'},
    {value: 'Cheshire', label: 'Cheshire'},
    {value: 'City of London', label: 'City of London'},
    {value: 'Cornwall', label: 'Cornwall'},
    {value: 'County Durham', label: 'County Durham'},
    {value: 'Cumbria', label: 'Cumbria'},
    {value: 'Derbyshire', label: 'Derbyshire'},
    {value: 'Devon', label: 'Devon'},
    {value: 'Dorset', label: 'Dorset'},
    {value: 'East Riding of Yorkshire', label: 'East Riding of Yorkshire'},
    {value: 'East Sussex', label: 'East Sussex'},
    {value: 'Essex', label: 'Essex'},
    {value: 'Gloucestershire', label: 'Gloucestershire'},
    {value: 'Greater London', label: 'Greater London'},
    {value: 'Greater Manchester', label: 'Greater Manchester'},
    {value: 'Hampshire', label: 'Hampshire'},
    {value: 'Hertfordshire', label: 'Hertfordshire'},
    {value: 'Isle of Wight', label: ' Isle of Wight'},
    {value: 'Kent', label: 'Kent'},
    {value: 'Lancashire', label: 'Lancashire'},
    {value: 'Leicestershire', label: 'Leicestershire'},
    {value: 'Lincolnshire', label: 'Lincolnshire'},
    {value: 'Merseyside', label: 'Merseyside'},
    {value: 'Norfolk', label: 'Norfolk'},
    {value: 'North Yorkshire', label: 'North Yorkshire'},
    {value: 'Northamptonshire', label: 'Northamptonshire'},
    {value: 'Northumberland', label: 'Northumberland'},
    {value: 'Nottinghamshire', label: 'Nottinghamshire'},
    {value: 'Oxfordshire', label: 'Oxfordshire'},
    {value: 'Rutland', label: 'Rutland'},
    {value: 'Shropshire', label: 'Shropshire'},
    {value: 'Somerset', label: 'Somerset'},
    {value: 'South Yorkshire', label: 'South Yorkshire'},
    {value: 'Staffordshire', label: 'Staffordshire'},
    {value: 'Suffolk', label: 'Suffolk'},
    {value: 'Surrey', label: 'Surrey'},
    {value: 'Tyne and Wear', label: 'Tyne and Wear'},
    {value: 'Warwickshire', label: 'Warwickshire'},
    {value: 'West Midlands', label: 'West Midlands'},
    {value: 'West Sussex', label: 'West Sussex'},
    {value: 'West Yorkshire', label: 'West Yorkshire'},
    {value: 'Wiltshire', label: 'Wiltshire'},
    {value: 'Worcestershire', label: 'Worcestershire'},
    {value: 'Anglesey', label: 'Anglesey'},
    {value: 'Breconshire', label: 'Breconshire'},
    {value: 'Caernarvonshire', label: 'Caernarvonshire'},
    {value: 'Cardiganshire', label: 'Cardiganshire'},
    {value: 'Carmarthenshire', label: 'Carmarthenshire'},
    {value: 'Denbighshire', label: 'Denbighshire'},
    {value: 'Flintshire', label: 'Flintshire'},
    {value: 'Glamorgan', label: 'Glamorgan'},
    {value: 'Merionethshire', label: 'Merionethshire'},
    {value: 'Monmouthshire', label: 'Monmouthshire'},
    {value: 'Montgomeryshire', label: 'Montgomeryshire'},
    {value: 'Pembrokeshire', label: 'Pembrokeshire'},
    {value: 'Radnorshire', label: 'Radnorshire'},
    {value: 'Aberdeen City', label: 'Aberdeen City'},
    {value: 'Aberdeenshire', label: 'Aberdeenshire'},
    {value: 'Angus', label: 'Angus'},
    {value: 'Argyll and Bute', label: 'Argyll and Bute'},
    {value: 'City of Edinburgh', label: 'City of Edinburgh'},
    {value: 'Clackmannanshire', label: 'Clackmannanshire'},
    {value: 'Dumfries and Galloway', label: 'Dumfries and Galloway'},
    {value: 'Dundee City', label: 'Dundee City'},
    {value: 'East Ayrshire', label: 'East Ayrshire'},
    {value: 'East Dunbartonshire', label: 'East Dunbartonshire'},
    {value: 'East Lothian', label: 'East Lothian'},
    {value: 'East Renfrewshire', label: 'East Renfrewshire'},
    {value: 'Eilean Siar', label: 'Eilean Siar'},
    {value: 'Falkirk', label: 'Falkirk'},
    {value: 'Fife', label: 'Fife'},
    {value: 'Glasgow City', label: 'Glasgow City'},
    {value: 'Highland', label: 'Highland'},
    {value: 'Inverclyde', label: 'Inverclyde'},
    {value: 'Midlothian', label: 'Midlothian'},
    {value: 'Moray', label: 'Moray'},
    {value: 'North Ayrshire', label: 'North Ayrshire'},
    {value: 'North Lanarkshire', label: 'North Lanarkshire'},
    {value: 'Orkney Islands', label: 'Orkney Islands'},
    {value: 'Perth and Kinross', label: 'Perth and Kinross'},
    {value: 'Renfrewshire', label: 'Renfrewshire'},
    {value: 'Scottish Borders', label: 'Scottish Borders'},
    {value: 'Shetland Islands', label: 'Shetland Islands'},
    {value: 'South Ayrshire', label: 'South Ayrshire'},
    {value: 'South Lanarkshire', label: 'South Lanarkshire'},
    {value: 'Stirling', label: 'Stirling'},
    {value: 'West Dunbartonshire', label: 'West Dunbartonshire'},
    {value: 'West Lothian', label: 'West Lothian'},
    {value: 'Antrim', label: 'Antrim'},
    {value: 'Armagh', label: 'Armagh'},
    {value: 'Derry and Londonderry', label: 'Derry and Londonderry'},
    {value: 'Down', label: 'Down'},
    {value: 'Fermanagh', label: 'Fermanagh'},
    {value: 'Tyrone', label: 'Tyrone'},
  ];

  module.exports = ukRegions;
