#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
import installMissingDependencies from './utils/installMissingDependancies';

installMissingDependencies();

require('./main').default();
