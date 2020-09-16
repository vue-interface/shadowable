# Shadowable

A mixin that adds the size class to the component.

[[toc]]

## Installation

NPM

    npm i <%= pkg.name %> --save

Yarn

    yard add <%= pkg.name %>

CDN

    https://cdn.jsdelivr.net/npm/<%= pkg.name %>@<%= pkg.version %>/dist/Shadowable.min.js

## Props

### shadow

The shadow of the form control. Possible values: `sm`, `md`, `lg`.

@default  'md'
@property  String


## Computed

### shadowableClass

The shadowable classes with the appropriate prefix.

@return  String
